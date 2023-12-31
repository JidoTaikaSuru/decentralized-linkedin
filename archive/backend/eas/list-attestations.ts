import { logger } from "../index.js";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const queryParamSchema = Joi.object({
  account: Joi.string().required(),
  limit: Joi.number().integer().less(100).optional(),
});

//This function isn't useful anymore because we'll have a graphql API
export const getAttestationsForAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.debug(`Fetching attestations for ${req.query.account}`);

  const { error, value } = queryParamSchema.validate(req.query);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }


  try {
    const composeClient: any = await getComposeClient();
    const data: any = await composeClient.executeQuery(`
            query {
              attestationIndex(filters: {
                or: [
          {
            where: {
              attester: { 
                    equalTo: "${value.account.toLowerCase()}"
                  } 
            }
          },
          {
            and: {
              where: {
            recipient : {
                    equalTo: "${value.account.toLowerCase()}"
                  } 
              }
            }
          }
            ],
            } 
          first: 100) {
            edges {
              node {
                    id
                    uid
                    schema
                    attester
                    verifyingContract 
                    easVersion
                    version 
                    chainId 
                    types{
                      name
                      type
                    }
                    r
                    s
                    v
                    recipient
                    refUID
                    data
                    time
                    confirm(first: 1){
                      edges{
                        node{
                          id
                          uid
                          schema
                          attester
                          verifyingContract 
                          easVersion
                          version 
                          chainId 
                          types{
                            name
                            type
                          }
                          r
                          s
                          v
                          recipient
                          refUID
                          data
                          time
                        }
                      }
                    }
                }
              }
            }
          }
      `);
    logger.debug("Attestations fetched:", data);
    return res.json(data);
  } catch (err) {
    res.json({
      err,
    });
  }
};
