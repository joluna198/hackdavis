// const people = [
//     { id: 1, name: 'Annette Black' },
//     { id: 2, name: 'Cody Fisher' },
//     { id: 3, name: 'Courtney Henry' },
//     { id: 4, name: 'Kathryn Murphy' },
//     { id: 5, name: 'Theresa Webb' },
// ]

export default function CheckBox({key, taskData, subTitle}) {
    return (
        <fieldset>
            {/* <legend className="text-lg font-large text-gray-900">Big Boi Header</legend> */}
            <legend className="text-lg font-medium text-gray-900">{subTitle}</legend>
            <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            {taskData.map((data) => (
                <div className="relative flex items-start py-4">
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
