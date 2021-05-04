class LoudGreeter extends Greeter {
    private extra: string ="!!";
    
    greet(name:string):string {
      return super.greet(name) + this.extra;
    }

    addVolume():void{
        this.extra += "!";
    }

}