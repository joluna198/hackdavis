import {useState} from "react";

export default function CheckBox({taskData, subTitle, onAdd, onRemove, color}) {
    const SingleCheckBox = (data) => {
        const [selected, setSelected] = useState(false);
        const onCheckHandler = (e) => {
            console.log(selected)
            setSelected(!selected)
            // if (selected) {
            //     onRemove(1)
            // } else {
            //     onAdd(1)
            // }
        }
        return (
            <div key={Math.random()}
                 className={`relative flex items-start py-4 px-2 border border-gray-200 my-2 rounded-md hover:${color.back_ground_color}`}>
                <div className="min-w-0 flex-1 text-sm">
                    <label className="font-medium text-gray-700 select-none">
                        {data.title}
                    </label>
                </div>
                <div className="ml-3 flex items-center h-5">
                    <input
                        id={Math.random()}
                        name={Math.random()}
                        type="checkbox"
                        checked={selected}
                        onChange={onCheckHandler}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                </div>
            </div>
        )
    }


    return (
        <fieldset>
            <legend
                className={`text-lg font-medium text-gray-900 text-center pt-14 ${color.title_color}`}>{subTitle}</legend>
            <div className="">
                {taskData.map((data) => SingleCheckBox(data))}
            </div>
        </fieldset>
    )
}
