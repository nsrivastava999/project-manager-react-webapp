const initstate = {
    projects:[
        {id:1,title:'Eat',content:'Eat your food on time'},
        {id:2,title:'Sleep',content:'Have a proper sleep'},
        {id:3,title:'Repeat',content:'Repeat the cycle'},
    ]
}

const projectReducer = (state=initstate,action) => {
    switch(action.type){
        case 'ADD_PROJECT':
            console.log('Created Project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error',action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;