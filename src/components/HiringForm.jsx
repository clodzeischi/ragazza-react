import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";
import { object, string, number } from "yup";

const HiringForm = () => {

    const userSchema = object({
        fname: string()
            .required('First name is required')
            .min(1, 'Must be 1-20 characters')
            .max(20, 'Must be 1-20 characters'),
        lname: string()
            .required('Last name is required')
            .min(1, 'Must be 1-20 characters')
            .max(20, 'Must be 1-20 characters'),
        address: string()
            .required('Address is required')
            .min(5, 'Must be 5-20 characters')
            .max(20, 'Must be 5-20 characters'),
        city: string()
            .required('City is required')
            .max(29, 'Must be under 29 characters'),
        state: string()
            .required('State is required')
            .oneOf(['TX', 'OK', 'NM'], 'Must be TX, OK, on NM'),
        age: number()
            .required('Age is required')
            .min(25, 'You must be at least 25 to apply')
            .max(89, "You're too old. Go run for senate"),
        phone: string()
            .required('Phone is required')
            .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone must be in format DDD-DDD-DDDD'),
        email: string()
            .required('Email is required')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter valid email'),
        password: string()
            .required('Password is required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,12}$/, 'Must meet complexity requirement, and be 8-12 characters'),
        married: string()
    });

    const { register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors}
    } = useForm({resolver: yupResolver(userSchema), defaultValues :
            {
                fname: '',
                lname: '',
                address: '',
                city: '',
                state: '',
                age: 25,
                phone: '',
                email: '',
                password: '',
                married: 'false'
            }});

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }


    const handleChange = (event) => {
        setValue(event.target.name, event.target.value);
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup row>
                    <Label for="fname" sm={2}>First name</Label>
                    <Col sm={10}>
                        <Input id="fname" placeholder="Alice" type="text"
                            {...register('fname')}
                            onChange={handleChange}/>
                    </Col>
                    {errors.fname && <span className={'bg-warning'}>{errors.fname.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="lname" sm={2}>Last name</Label>
                    <Col sm={10}>
                        <Input id="lname" placeholder="Inchains" type="text"
                            {...register('lname')}
                            onChange={handleChange}/>
                    </Col>
                    {errors.lname && <span className={'bg-warning'}>{errors.lname.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="address" sm={2}>Address</Label>
                    <Col sm={10}>
                        <Input id="address" placeholder="123 Main st." type="text"
                            {...register('address')}
                            onChange={handleChange}/>
                    </Col>
                    {errors.address && <span className={'bg-warning'}>{errors.address.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="city" sm={2}>City</Label>
                    <Col sm={10}>
                        <Input id="city" placeholder="Toanwood" type="text"
                            {...register('city')}
                            onChange={handleChange}/>
                    </Col>
                    {errors.city && <span className={'bg-warning'}>{errors.city.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="state" sm={2} >State</Label>
                    <Col sm={10}>
                        <Input id="state" type="select"
                               {...register('state')}
                               onChange={handleChange}>
                            <option>--state--</option>
                            <option>TX</option>
                            <option>NM</option>
                            <option>OK</option>
                        </Input>
                    </Col>
                    {errors.state && <span className={'bg-warning'}>{errors.state.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="age" sm={2}>Age</Label>
                    <Col sm={10}>
                        <Input id="age" placeholder='25' type="number"
                               {...register('age')}
                               onChange={handleChange}/>
                    </Col>
                    {errors.age && <span className={'bg-warning'}>{errors.age.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="phone" sm={2}>Phone</Label>
                    <Col sm={10}>
                        <Input id="phone" placeholder="123-123-1234" type="text"
                               {...register('phone')}
                               onChange={handleChange}/>
                    </Col>
                    {errors.phone && <span className={'bg-warning'}>{errors.phone.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input id="email" placeholder="name@domain.com" type="email"
                               {...register('email')}
                               onChange={handleChange}/>
                    </Col>
                    {errors.email && <span className={'bg-warning'}>{errors.email.message}</span>}
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input id="password" placeholder="Create password" type="password"
                               {...register('password')}
                               onChange={handleChange}/>
                    </Col>
                    {errors.password && <span className={'bg-warning'}>{errors.password.message}</span>}
                </FormGroup>
                <FormGroup row tag="fieldset">
                    <legend className="col-form-label col-sm-2">Married</legend>
                    <Col sm={10}>
                        <FormGroup check>
                            <Input type="radio" value='false' defaultChecked={true}
                                   {...register('married')}
                                   onChange={handleChange}/>
                            {' '}
                            <Label check>No</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="radio" value='true'
                                   {...register('married')}
                                   onChange={handleChange}/>
                            {' '}
                            <Label check>Yes</Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{offset: 4, size: 8}}>
                        <Button type='submit'>Submit</Button>
                        {' '}
                        <Button type='reset'>Reset</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    )
}

export default HiringForm;