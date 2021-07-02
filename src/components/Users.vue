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
			<td :colspan="headers.length">Начальник: {{ item.departmentHeadName }} ---- Номер телефона: {{ item.userNumberPhone }} </td>
		</template>
	</v-data-table>
</template>

<script>
import {  mapGetters } from 'vuex';

export default {
	data() {
		return {
			expanded: [],
			singleExpand: true,
			headersMap: [
				{ text: 'Имя', value: 'userName' },
				{ text: 'Телефон', value: 'userNumberPhone' },
				{ text: 'Начальник', value: 'departmentHeadName' },
			],
		};
	},
	computed: {
		...mapGetters(['getUsers']),
	},
};
</script>