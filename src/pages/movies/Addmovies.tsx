import { NavLink } from "react-router"
import {Button, Form} from "react-bootstrap"
import { useState, type ChangeEvent, type FormEvent } from "react"
import ApiClient from "../../utils/ApiClient"

interface FormMovie{
    judul : string,
    tahunRilis : string,
    sutradara : string,
}

function AddMovies() {
    const [form , setForm] =useState<FormMovie>({
        judul : "",
        tahunRilis : "",
        sutradara : "",
    })


    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
        const{name, value} = event.target
        setForm({
            ...form,
            [name] : value,
        })
    }


    const handleSubmit = async (event : FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try{
            const response = await ApiClient.post("/movie", form)
            console.log(response);
        } catch (error){
            console.log(error);
    }

    }
        
    
    return<div className="container mx-auto">
        <div className="d-flex justify-content-between my-3">
        <h4>Add Movie Page</h4>
        <NavLink to="/"className="btn btn-primary">list Movie</NavLink>
        </div>
    <div>
         <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fromjudul">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control
                    value={form.judul}
                    onChange={handleInputChange}
                    name="judul"
                    type="text"
                    placeholder="Judul film" />
                </Form.Group>
            <Form.Group controlId="fromTahunRilis">
                    <Form.Label>tahunRilis</Form.Label>
                    <Form.Control
                    value={form.tahunRilis}
                    onChange={handleInputChange}
                    name="tahunRilis"
                    type="text"
                    placeholder="Tahun Rilis"/>
                </Form.Group>
             <Form.Group controlId="fromTahunRilis">
                    <Form.Label>Sutradara</Form.Label>
                    <Form.Control
                    value={form.sutradara}
                    onChange={handleInputChange}
                    name="sutradara"
                    type="text"
                    placeholder="Sutradara" />
                </Form.Group>

            <Button type="submit" variant="primary" > Klik Goblok
            </Button>
         </Form>
    </div>
 </div>

}

export default AddMovies