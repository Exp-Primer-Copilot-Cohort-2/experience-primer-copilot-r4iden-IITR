function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controllerAs: 'vm',
        BindToController: true,
        scope{
            member:'m'
        } 
    };
}