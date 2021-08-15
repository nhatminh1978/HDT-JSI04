class People {
    constructor(name,age,address){
        this.name = name
        this.age = age
        this.address = address
    }
    set nhapTen(nmae){
        name = prompt('nhap ten vao nguoi dung')
    }
}
class Student extends People {
    constructor(name,age,adress,id,math,physical,chemistry){
        super(nmae,age,address);
        this.id = id;
        this.math = math;
        this.physical = physical;
        this.chemistry - chemistry;

    }

}