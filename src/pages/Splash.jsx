const Splash = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/bkg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}>

                <h1 className="text-light display-1 ml-2"
                style={{
                    textShadow: "4px 4px 6px rgba(0, 0, 0, 0.6)",
                    marginLeft: '1rem'
                }}
                >Welcome to Ragazza Di Campagna</h1>
        </div>
    )
}

export default Splash;