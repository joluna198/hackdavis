const people = [
    { id: 1, name: 'Annette Black' },
    { id: 2, name: 'Cody Fisher' },
    { id: 3, name: 'Courtney Henry' },
    { id: 4, name: 'Kathryn Murphy' },
    { id: 5, name: 'Theresa Webb' },
]

export default function Checkbox() {
    return (
        <fieldset>
            <legend className="text-lg font-medium text-gray-900 text-center pt-14">Members</legend>
            <div className="">
                {people.map((person, personIdx) => (
                    <div key={personIdx} className="relative flex items-start py-4 px-2 border border-gray-200 my-2 rounded-md hover:bg-gray-100">
                        <div className="min-w-0 flex-1 text-sm">
                            <label htmlFor={person.id} className="font-medium text-gray-700 select-none">
                                {person.name}
                            </label>
                        </div>
                        <div className="ml-3 flex items-center h-5">
                            <input
                                id={person.id}
                                name={person.id}
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
