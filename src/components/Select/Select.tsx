import React from "react"

type Itemtype = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Itemtype[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value);
    return (
        <div>
            <select>
                <option value = ''>Minsk</option>
                <option value = ''>Moscow</option>
                <option value = ''>Kiev</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}