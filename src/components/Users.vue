<template>
	<v-data-table
		:headers="headersMap"
		:items="getUsers"
		:single-expand="singleExpand"
		:expanded.sync="expanded"
		item-key="id"
		show-expand
		class="elevation-1"
	>
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Таблица пользователей</v-toolbar-title>
				<v-spacer></v-spacer>
			</v-toolbar>
		</template>
		<template v-slot:expanded-item="{ headers, item }">
			<td :colspan="headers.length">
				<div v-for="assistant in item.assistant" :key="assistant.phone" :value="assistant.name">
					Асистент: {{ assistant.name }}
					Номер телефона: {{ assistant.numberPhone }}
				</div>
			</td>
		</template>
	</v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			expanded: [],
			singleExpand: true,
			headersMap: [
				{ text: 'Имя', value: 'departmentHeadName' },
				{ text: 'Телефон', value: 'departmentHeadNumberPhone' },
			],
		};
	},
	computed: {
		...mapGetters(['getUsers']),
	},
};
</script>