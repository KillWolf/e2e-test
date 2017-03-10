function scrumController() {

	var vm = this;

	vm.submitToList = submitToList;

	vm.goalitem = '';
	vm.goal = '';


	vm.todo = [
	{
		goalitem: 'bas',
		goal: 'lære alle toner',
	},
	{
		goalitem: 'crossfit',
		goal: {
			goal: 'Test mod 400m løb, 21-15-9 burpees & airsquat, 400løb',
			besttime: '16 minutter'
		}
		
	},
	{
		goalitem: 'kodning',
		goal: 'Kod eget scrum app',
	}, 
	{
		goalitem: 'kodning',
		goal: 'freecodecamp finish'
	}
	]

	function submitToList() {

		vm.todo.push({goalitem: vm.goalitem, goal: vm.goal});
		vm.goalitem = '';
		vm.goal = '';


	}
	
}

angular.module('mainApp')
	.controller('scrumController', scrumController);