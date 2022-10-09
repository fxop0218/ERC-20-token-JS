const { network } = require("hardhat")
const { developmentChains, INITIAL_SUPLY } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const ourToken = await deploy("OurToken", {
        from: deployer,
        args: [INITIAL_SUPLY],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    console.log("d")
    console.log(`Token deployed at ${ourToken.address}`)
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(ourToken.address, [INITIAL_SUPLY])
    }
}

module.exports.tags = ["all", "token"]
