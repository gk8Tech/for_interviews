export default {
	actions: {},
	mutations: {
		changeAddUserDialog(state) {
			state.isAddUserDialog = !state.isAddUserDialog;
		},
		addUser(state, user) {
			const nextIdForUser = state.users[state.users.length - 1].id + 1;
			const userWithNextId = { ...user, id: nextIdForUser};
			state.users.push(userWithNextId);
			localStorage.setItem('users', JSON.stringify(state.users));
		},
		setLocalStorageUsers(state, user) {
			state.users = user;
		},
	},
	state: {
		isAddUserDialog: false,
		users: [
			{
				id: 1,
				userName: 'Иван',
				userNumberPhone: '777-55',
				departmentHeadName: 'Дмитрий',
			},
			{
				id: 2,
				userName: 'Сергей',
				userNumberPhone: '777-44',
				departmentHeadName: 'Дмитрий',
			},
			{
				id: 3,
				userName: 'Олег',
				userNumberPhone: '777-33',
				departmentHeadName: 'Дмитрий',
			},
		],
	},
	getters: {
		getAddUserDialog(state) {
			return state.isAddUserDialog;
		},
		getUsers(state) {
			return state.users;
		},
	},
};
