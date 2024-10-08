# react-demo-learn

## 使用use-immer

1. install

    ```shell
    npm install use-immer
    ```

2. use

    ```js
        
    const [array, setArray] = useImmer([]);

    const clickHandler = () => {
        setArray((draft) => {
            draft.push(draft.length);
        });
    };
    return (
        <>
            <div onClick={clickHandler}>add item</div>
            {array.map((item) => {
                return <div key={item}>{item}</div>;
            })}
        </>
    );
    ```

## 父子组件传值

**场景**: 解决数据共享的问题

通过属性的方式传值
父 -> 子: 数据
子 -> 父: 函数

## 组件状态被清除的时机

组件的状态是相互隔离的，当组件被销毁的时候状态会被清空，只有组件的位**置发生变化**时组件才会被销毁

## React 组件的key的作用

- 当组件存在key值的时候，只要key发生变化，组件就会被销毁
- 在列表渲染的时候给每一个item项中设置key可以提升组件的渲染效率，原因是能提升虚拟dom diff算法的执行效率
