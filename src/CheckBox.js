export default function CheckBox({taskData, subTitle, color}) {
    return (
        <fieldset>
            <legend className={`text-lg font-medium text-gray-900 text-center ${color.title_color}`}>{subTitle}</legend>
            <div className="">
            {taskData.map((data) => (
                <div key={Math.random()} className={`relative flex items-start pt-4 pb-10 px-2 border border-gray-200 my-2 rounded-md hover:${color.back_ground_color}`}>
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
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                    </div>
                </div>
            ))}
            </div>
        </fieldset>
    )
}
