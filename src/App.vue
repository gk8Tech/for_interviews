<template>
	<v-app>
		<v-main>
			<div>
				<Users />
				<v-container fluid class="button-container">
					<v-row align="center" justify="space-around">
						<v-btn @click="changeAddUserDialog" elevation="2" color="primary">Добавить пользователя</v-btn>
					</v-row>
				</v-container>
				<v-container fluid class="button-container">
					<v-row align="center" justify="space-around">
						<v-btn @click="clearLocalStorage" elevation="2" color="primary">Очистить LocalStorage</v-btn>
					</v-row>
				</v-container>
			</div>
			<div><AddUsers /></div>
		</v-main>
	</v-app>
</template>

<script>
import AddUsers from './components/AddUsers';
import Users from './components/Users';
import { mapMutations } from 'vuex';

export default {
	name: 'App',

	components: {
		AddUsers,
		Users,
	},

	data: () => ({
		//
	}),
	async beforeMount() {
		if (localStorage.getItem('users')) {
			const localStorageUsers = JSON.parse(localStorage.getItem('users'));

			if (localStorageUsers.length) {
				this.$store.commit('setLocalStorageUsers', localStorageUsers);
			}
		}
	},
	methods: {
		...mapMutations(['changeAddUserDialog']),
		clearLocalStorage() {
			localStorage.clear();
		},
	},
};
</script>

<style scoped>
.button-container {
	margin-top: 20px;
}
</style>
