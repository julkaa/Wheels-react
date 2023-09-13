class ErrorService {
    constructor() {
        this.D = null
    }
    onLog(delegate){
        this.D = delegate
    }
    Log(message){
        this.D(message)
    }
    
}
export const errorService = new ErrorService();