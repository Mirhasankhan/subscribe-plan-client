
const PlanForm = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-base-300 p-6 flex w-1/2 gap-6 mx-auto">
                <div>
                    <div>
                        <label htmlFor="">Subscription Name</label>
                        <input required name="plan" className="input-style w-full" type="text" placeholder="Write Name Here" />
                    </div>
                    <div>
                        <label htmlFor="">Image</label>
                        <input required className="input-style w-full" type="url" name="image"/>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Montly Cost</label>
                        <input required name="monthly" className="input-style w-full" type="number" placeholder="cost" />
                    </div>
                    <div>
                        <label className="block" htmlFor="">Yearly Cost</label>
                        <input required name="yearly" className="input-style w-full" type="number" placeholder="year cost" />
                    </div>
                </div>
                <input className="sign-up" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default PlanForm;