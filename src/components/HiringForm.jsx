import {Form, FormGroup, Label, Input, Col, FormText, Button} from "reactstrap";

/*
First name: required; 1–20 characters
Last name: optional; if present 1–20 characters
Address 1: required; maximum length should be defined by you (reasonable choice)
City: required; maximum 29 characters
State: required; select with only three two-letter options
Age: required; range 21–99; default value 21
Phone: required
Email: required

Password: required; 8–12 characters; must include at least one uppercase, one lowercase, one number, and one special symbol; enforce with pattern
    Married: radio buttons; default set to “single”
Buttons: Submit and Reset
*/



const HiringForm = () => {
    return (
        <>
            <Form>
                <FormGroup row>
                    <Label
                        for="firstName"
                        sm={2}>
                        First name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="firstName"
                            name="fname"
                            placeholder="Alice"
                            type="text"
                            required={true}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="lastName"
                        sm={2}>
                        Last name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="lastName"
                            name="lname"
                            placeholder="Inchains"
                            type="text"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="address"
                        sm={2}>
                        Address
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="address"
                            name="address"
                            placeholder="123 Main st."
                            type="text"
                            required={true}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="city"
                        sm={2}>
                        City
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="city"
                            name="city"
                            placeholder="Toanwood"
                            type="text"
                            required={true}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label
                        for="stateSelect"
                        sm={2} >
                        State
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="stateSelect"
                            name="select"
                            type="select"
                            required={true}>
                            <option>TX</option>
                            <option>NM</option>
                            <option>OK</option>
                            <option>LA</option>
                            <option>AZ</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="age"
                        sm={2}>
                        Age
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="age"
                            name="age"
                            placeholder="21"
                            type="number"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="phone"
                        sm={2}>
                        Phone
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="123-123-1234"
                            type="text"
                            required={true}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="email"
                        sm={2}>
                        Email
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="email"
                            name="email"
                            placeholder="name@domain.com"
                            type="email"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="examplePassword"
                        sm={2}>
                        Password
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Create password"
                            type="password"
                            required={true}/>
                    </Col>
                </FormGroup>

                <FormGroup row tag="fieldset">
                    <legend className="col-form-label col-sm-2">
                        Married
                    </legend>
                    <Col sm={10}>
                        <FormGroup check>
                            <Input
                                name="radio2"
                                type="radio"
                                value='false'
                                defaultChecked={true}
                            />
                            {' '}
                            <Label check>
                                No
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="radio2"
                                type="radio"
                                value='true'
                            />
                            {' '}
                            <Label check>
                                Yes
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup
                    check
                    row>
                    <Col
                        sm={{
                            offset: 2,
                            size: 4
                        }}>
                        <Button>Submit</Button>
                        {' '}
                        <Button>Reset</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}

export default HiringForm;