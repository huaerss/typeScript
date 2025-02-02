/**
 *  @description 例子字段推导题目
 */

type Watcher = {
    on(event: string, cb: Function): void;
}

declare function watch(obj: object): Watcher
const personWatch = watch({
    fistName: 'sao',
    lastName: 'john',
    age: 12
})

personWatch.on(
    'ageChange',
    (newValue, oldValue) => {
        console.log(newValue, oldValue)
    }
)
