import {useState} from "react";

export default function CheckBox({key, taskData, subTitle, onAdd, onRemove}) {
    const [selected, setSelected] = useState(false); 
    console.log("SELECTED STATE:", selected)
    const onCheckHandler = () => {
        setSelected((prevSelected) => !prevSelected)
        let funcToExec = selected == false ? onAdd : onRemove;
        funcToExec();
    }
    return (
        <fieldset>
            <legend className="text-lg font-medium text-gray-900 text-center pt-14">{subTitle}</legend>
            <div className="">
            {taskData.map((data) => (
                <div className="relative flex items-start py-4 px-2 border border-gray-200 my-2 rounded-md hover:bg-blue-100">
                    <div className="min-w-0 flex-1 text-sm">
                        <label className="font-medium text-gray-700 select-none">
                            {data.title}
                        </label>
                    </div>
                    <div className="ml-3 flex items-center h-5">
                        <input
                            id={data.title}
                            name={data.score}
                            type="checkbox"
                            onChange={onCheckHandler}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                    </div>
                </div>
            ))}
            </div>
        </fieldset>
    )
}
