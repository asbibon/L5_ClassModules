import Employee from './Employee.js';
export default class Developer extends Employee{
    _lang;
    constructor(name,salary,IsRemote,lang){
        super(name,salary,IsRemote);
        this._lang=lang;
        delete this['#giveBonus']
    }
    get lang(){
        return this._lang;
    }
    set lang(value){
        this._lang=value;
    }
    static clone(obj){
        return new Developer(obj.name,obj.salary,obj.IsRemote,obj.lang);
    }
    show(){
        console.log(`Имя разработчика: ${this.name} Язык программирования: ${this._lang} Зп: ${this.salary} Удаленка: ${this.isRemote ? 'Да' : 'Нет'}`)
    }
    delete(){
        this._lang=null;
        super.delete();
        console.log('Объект очищен');
    }
    copy(){
        console.log(`Создана копия: ${this.name}`);
        return super.copy();
    }
}
