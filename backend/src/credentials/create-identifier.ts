import { agent } from './index'
import { Request, Response, NextFunction } from 'express'
import {logger} from "../index";

const createIdentifier = async (req: Request, res: Response, next: NextFunction) => {
    const identifier = await agent.didManagerCreate({ alias: 'default' })
    logger.info(`New identifier created`)
    logger.info(identifier)
    res.send(identifier)
}

export default createIdentifier