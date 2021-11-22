export const state = () =>({
    windowState:false,
});
export const mutation = {
    watchWs(state){
        if(state.windowState===true){
            state.windowState=false;
          }else{
            state.windowState=true;
          }
    },
};
