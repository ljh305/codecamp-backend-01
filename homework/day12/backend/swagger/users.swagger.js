/**
 * @swagger
 * /users:
 *  post:
 *      summary: 유저 추가하기
 *      tags: [User]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                            type: object
 *                            properties:
 *                              user:
 *                                  type: object
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          required: true
 *                                          example: 김철수
 *                                      email:
 *                                          type: string
 *                                          required: true
 *                                          example : ljh3057713@gmail.com
 *                                      personal1:
 *                                          type: string
 *                                          required: true
 *                                          example : 990909
 *                                      personal2:
 *                                          type: string
 *                                          required: true
 *                                          example : 1111111
 *                                      prefer:
 *                                          type: string
 *                                          required: true
 *                                          example : https://naver.com
 *                                      pwd:
 *                                          type: string
 *                                          required: true
 *                                          example : 159159
 *                                      phone:
 *                                          type: string
 *                                          required: true
 *                                          example : "01049133976"
 *      responses:
 *          '200':
 *                  description: user의 문자열과 _id 리턴
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: 회원가입이 완료되었습니다 ID 61ee1b7272a81036fc429a05
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: 유저 받아오기
 *      tags: [User]
 *      responses:
 *          '200':
 *                description: user의 목록
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                name:
 *                                    type: string
 *                                    required: true
 *                                    example: 김철수
 *                                email:
 *                                    type: string
 *                                    required: true
 *                                    example : ljh3057713@gmail.com
 *                                personal:
 *                                    type: string
 *                                    required: true
 *                                    example : 990909
 *                                prefer:
 *                                    type: string
 *                                    required: true
 *                                    example : https://naver.com
 *                                phone:
 *                                    type: string
 *                                    required: true
 *                                    example : "01049133976"
 *                                og:
 *                                    type: object
 *                                    properties:
 *                                         title:
 *                                              type: string
 *                                              example: 네이버
 *                                         img:
 *                                              type: string
 *                                              example: src소스
 *                                         description:
 *                                              type: string
 *                                              example: 네이버입니다
 */
