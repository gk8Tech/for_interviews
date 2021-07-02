export default {
	actions: {},
	mutations: {
		changeAddUserDialog(state) {
			state.isAddUserDialog = !state.isAddUserDialog;
		},
		addUserWithoutDepartmentHead(state, user) {
			const nextIdForUser = state.users[state.users.length - 1].id + 1;
			const userWithNextId = { id: nextIdForUser, departmentHeadName: user.userName, departmentHeadNumberPhone: user.userNumberPhone, assistant: [] };
			state.users.push(userWithNextId);
			localStorage.setItem('users', JSON.stringify(state.users));
		},

		addUserWithDepartmentHead(state, user) {
			const departmentHeadId = state.users.findIndex((e) => 
				e.id === user.departmentHeadName.id
			)
			state.users[departmentHeadId].assistant.push({name: user.userName, numberPhone: user.userNumberPhone });	
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
				departmentHeadName: 'Иван',
				departmentHeadNumberPhone: '777-55',
				assistant: [{name: 'Дмитрий', numberPhone: '444-22'}],
			},
			{
				id: 2,
				departmentHeadName: 'Сергей',
				departmentHeadNumberPhone: '777-44',
				assistant: [{name: 'Николай', numberPhone: '444-44'}],
			},
			{
				id: 3,
				departmentHeadName: 'Олег',
				departmentHeadNumberPhone: '777-33',
				assistant: [{name: 'Олег', numberPhone: '444-55'}],
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
