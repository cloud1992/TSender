export function AirdropForm() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold mb-4">Airdrop Form</h1>
        <form className="w-full max-w-lg">
            <div className="mb-4">
            <label htmlFor="recipient" className="block text-gray-700 text-sm font-bold mb-2">
                Recipient Address
            </label>
            <input
                type="text"
                id="recipient"
                placeholder="0x..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                Amount
            </label>
            <input
                type="number"
                id="amount"
                placeholder="0.00"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Airdrop
            </button>
        </form>
        </div>
    );
}