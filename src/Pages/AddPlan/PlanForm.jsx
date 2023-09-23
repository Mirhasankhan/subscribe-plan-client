
const PlanForm = ({ handleSubmit }) => {
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold my-6">Upload Your New Plan</h1>
            <form onSubmit={handleSubmit} className="bg-base-300 mt-6 rounded-lg p-6 w-1/2  mx-auto">
                <div className="flex gap-6">
                    <div>
                        <div>
                            <label className="font-semibold" htmlFor="">Subscription Name</label>
                            <input required name="plan" className="input-style w-full mt-2" type="text" placeholder="Write Name Here" />
                        </div>
                        <div className="mt-3">
                            <label className="font-semibold" htmlFor="">Image</label>
                            <input required className="input-style w-full mt-2" type="url" name="image" placeholder="PhotoURL" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="font-semibold" htmlFor="">Montly Cost</label>
                            <input required name="monthly" className="input-style w-full mt-2" type="number" placeholder="cost" />
                        </div>
                        <div className="mt-3">
                            <label className="font-semibold block" htmlFor="">Yearly Cost</label>
                            <input required name="yearly" className="input-style w-full mt-2" type="number" placeholder="year cost" />
                        </div>
                    </div>
                </div>
                <input className="sign-up w-full mt-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PlanForm;