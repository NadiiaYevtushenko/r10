import HyperspaceForm from './components/HyperspaceForm'

const App = () => {
    return (
        <div className="page-container">
            <div className="left-block">
                <h2>Ready to experience Hyperspace?</h2>
                <p>We'd love to learn how Hyperspace can help you with the most extreme search you need with a piece of mind you deserve</p>
            </div>

            <div className="right-block">
                <h1 className="form-title">Registration Form</h1>
                <HyperspaceForm />
            </div>
        </div>
    )
}

export default App