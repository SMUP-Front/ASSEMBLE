
export function getTokens(){

    const tempAccess = localStorage.getItem('access_Token');
    const tempRefresh = localStorage.getItem('refresh_Token');
    if(!tempAccess && !tempRefresh){ //스토리지에 없다면?
        return(null)
    }
    else{ //있긴 하다면?
        const Access = tempAccess;
        const Refresh =  tempRefresh;
        return({Access,Refresh})

    }

}