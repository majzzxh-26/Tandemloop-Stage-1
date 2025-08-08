//JS calculator;
class Calculator {
    constructor(a,b,calculation) {
        this.a=a;
        this.b=b;
        this.calculation=calculation.toLowerCase();
       }
       Calculating(){
        if(this.calculation=='add'){
            return(this.a +this.b);
        }
        else if(this.calculation=='sub'){
            return(this.a-this.b);
        }
        else if(this.calculation=='mul'){
            return(this.a*this.b);
        }
        else if(this.calculation=='div'){
            if(this.b==0){
                return("Don't Use Zero as Divisor");
            }
            else{
                return(this.a/this.b);
            }
        }
        else{
            return("Enter 'add','sub','mul','div' Operation Only ")
        }
       }
       
}


//Some Example inputs

const input1=new Calculator(12.5,3.6,'add');
console.log("The Addition of Two Numbers","",input1.Calculating());

const input2=new Calculator(12.5,3.5,'sub');
console.log("The Subtraction of Two Numbers","",input2.Calculating());

const input3=new Calculator(12.5,6.2,'mul');
console.log("The Subtraction of Two Numbers","",input3.Calculating());

const input4=new Calculator(12.5,0,'div');
console.log("The Subtraction of Two Numbers","",input4.Calculating());

const input5=new Calculator(12,4,'div');
console.log("The Subtraction of Two Numbers","",input5.Calculating());

const input6=new Calculator(12.5,3.5,'anything');
console.log("NOTE:",input6.Calculating());

const input7=new Calculator(12.5,3.6,'ADD');
console.log("The Addition of Two Numbers","",input7.Calculating());



