<template>
	<v-app>
		<v-dialog v-model="getAddUserDialog" persistent max-width="600px">
			<v-card>
				<v-card-title>
					<span class="headline">Добавить пользователя</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<v-text-field v-model="userInfo.userName" :counter="10" label="Имя" required></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-text-field v-model="userInfo.userNumberPhone" :counter="10" label="Телефон" required></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-select
									:clearable="true"
									v-model="userInfo.departmentHeadName"
									:items="addDepartmentHeadNames"
									item-text="departmentHeadName"
									return-object
									label="Имя начальника"
								></v-select>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="changeAddUserDialog"> Close </v-btn>
					<v-btn color="blue darken-1" text @click="add"> Save </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
	name: 'AddUsers',
	data: () => ({
		userInfo: {
			departmentHeadName: '',
			userName: '',
			userNumberPhone: '',
		},
		dialog: false,
	}),
	methods: {
		...mapMutations(['changeAddUserDialog', 'addUserWithoutDepartmentHead', 'addUserWithDepartmentHead']),
		add() {
			if (this.userInfo.departmentHeadName) {
				this.addUserWithDepartmentHead(this.userInfo);
			} else {
				this.addUserWithoutDepartmentHead(this.userInfo);
			}
			this.changeAddUserDialog();
			this.userInfo = {
				departmentHeadName: '',
				userName: '',
				userNumberPhone: '',
			};
		},
	},
	computed: {
		...mapGetters(['getAddUserDialog', 'getUsers']),
		addDepartmentHeadNames: function () {
			const names = this.getUsers.map((e) => ({ id: e.id, departmentHeadName: e.departmentHeadName }));
			return names;
		},
	},
};
</script>


