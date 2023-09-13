class Account {
    constructor() {
        this.User = null;
    }
    setUser(u) {
        this.User = u;
    }
    getUserId(){
        return this.User.id;
    }
    isLogined(){
        return this.User != null;
    }

    
}

export const accountService = new Account();