/**
 * @description 写一个GetOptionalKeys函数，获取一个对象的所有可选属性的key
 * @description 扩展知识: as 用法
 * interface ComplexObject {
    must: string;
    option1?: string;
    option2?: string;
 }
 let keys: GetOptionalKeys<ComplexObject>;
 */
interface ComplexObject {
    must: string;
    option1?: string;
    option2?: string;
}

// Required<ComplexObject> // { must: string option: string  option2: string }

type GetOptionalKeys<T> = {
    [k in keyof T as T[k] extends Required<T>[k] ? never : `get${k & string}`]: T[k]
    // 继承的时候由于原来的类型是可选的所以是 string|undefined  跟Required<T>[k] 对比后 会有差异
}
let keys: GetOptionalKeys<ComplexObject>;














