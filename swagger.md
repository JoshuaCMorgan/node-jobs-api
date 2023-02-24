openapi: 3.0.0
info:
  title: Jobs-API
  contact: {}
  version: '1.0'
servers:
- url: https://jobs-api-06-node.herokuapp.com/api/v1
  variables: {}
paths:
  /auth/register:
    post:
      tags:
      - Auth
      summary: Register User
      operationId: RegisterUser
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              allOf:
              - $ref: '#/components/schemas/RegisterUserRequest'
            example:
              name: Bob
              email: bob@gamil.com
              password: secret
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security: []
    parameters: []
  /auth/login:
    post:
      tags:
      - Auth
      summary: Login User
      operationId: LoginUser
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              allOf:
              - $ref: '#/components/schemas/LoginUserRequest'
            example:
              name: jimmy
              email: jimmy@gmail.com
              password: secret
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security: []
    parameters: []
  /jobs:
    post:
      tags:
      - Jobs
      summary: Create Job
      operationId: CreateJob
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              allOf:
              - $ref: '#/components/schemas/CreateJobRequest'
            example:
              company: Greenville downtown
              position: tester developer
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security:
      - bearer: []
    get:
      tags:
      - Jobs
      summary: Get All Jobs
      operationId: GetAllJobs
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security:
      - bearer: []
  /jobs/{id}:
    parameters:
      - in: path
        name: id
        schema:
          type: string
        required: true
        description: the job id
    get:
      tags:
      - Jobs
      summary: Get Single Job
      operationId: GetSingleJob
      parameters:
      - name: id
        in: path
        description: ''
        required: true
        style: simple
        schema:
          type: string
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security:
      - bearer: []
    patch:
      tags:
      - Jobs
      summary: Patch Single Job
      operationId: PatchSingleJob
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              allOf:
              - $ref: '#/components/schemas/PatchSingleJobRequest'
            example:
              company: Greenville Uptown
              position: Reach developer
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security:
      - bearer: []

    delete:
      tags:
      - Jobs
      summary: Delete Single Job
      operationId: DeleteSingleJob
      parameters: []
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security:
      - bearer: []

components:
  schemas:
    RegisterUserRequest:
      title: RegisterUserRequest
      required:
      - name
      type: object
      properties:
        name:
          type: string
    LoginUserRequest:
      title: LoginUserRequest
      required:
      - name
      - email
      - password
      type: object
      properties:
        name:
          type: string
        email:
          type: string
        password:
          type: string
    CreateJobRequest:
      title: CreateJobRequest
      required:
      - company
      - position
      type: object
      properties:
        company:
          type: string
        position:
          type: string
    PatchSingleJobRequest:
      title: PatchSingleJobRequest
      required:
      - company
      - position
      type: object
      properties:
        company:
          type: string
        position:
          type: string
  securitySchemes:
    bearer:
      type: http
      scheme: bearer
security: []
tags:
- name: Misc
  description: ''
- name: Auth
  description: ''
- name: Jobs
  description: ''