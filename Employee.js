export default class Employee{
    _name;
    _salary;
    _IsRemote;

  get name() { return this._name;}
  set name(value) { this._name = value;}
  get salary(){return this._salary;}
  set salary(value) { this._salary = Number(value);}
  get IsRemote(){return this._IsRemote;}
  set IsRemote(value) { this._IsRemote = Boolean(value);}
  
  constructor(name,salary,IsRemote){
    this._name=name;
    this._salary=salary;
    this._IsRemote=IsRemote;
  }

  show(){
    console.log(`Сотрудник:${this._name}, Зп:${this._salary}, Удаленка:${this._isRemote ? 'Да' : 'Нет'}`)
  }

  delete(){
    this._name=null;
    this._salary=null;
    this._IsRemote=null;
    Object.setPrototypeOf(this,null);
    console.log('Объект очищен');
  }

copy(){
    return this;
}

#giveBonus(){
    this._salary=this._salary+5000;
}

static clone(obj){
return new Employee(obj.name,obj.salary,obj.IsRemote);
}
}
