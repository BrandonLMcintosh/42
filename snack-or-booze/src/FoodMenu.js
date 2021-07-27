import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import SnackOrBoozeApi from "./Api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  FormGroup,
  FormText
} from "reactstrap";

function convertToID(str){
  return str.toLowerCase().replace(/\S+/g, '-')
}

function FoodMenu({ food, type, title, update}) {

  const INTITIAL_STATE = {
    name: '', 
    description: '',
    recipe: '', 
    serve: '',
  }
  const [formData, setFormData] = useState(INTITIAL_STATE)

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }))
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    const data = {
      ...formData, 
      id: convertToID(formData.name),
    }
    await SnackOrBoozeApi.postFood(type, data);
    setFormData(INTITIAL_STATE);
    update();
  }
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {food.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <FormGroup>
            <FormText color="muted">~Add a new {type}~</FormText>
            <label htmlFor="name"> {"Name: "} <input type="text" name="name" id="name" value={formData.name} placeholder={`Name of your ${type}`} onChange={handleChange}></input></label>
            <label htmlFor="description"> {"Description: "} <input type="text" name="description" id="description" placeholder={`Description of your ${type}`} value={formData.description}  onChange={handleChange}></input></label>
            <label htmlFor="recipe"> {"Recipe: "} <input type="text" name="recipe" id="recipe" placeholder={`What goes into your ${type}`} value={formData.recipe} onChange={handleChange} ></input></label>
            <label htmlFor="serve"> {"Served: "} <input type="text" name="serve" id="serve" placeholder={`How the ${type} is served`} value={formData.serve} onChange={handleChange}></input></label>
            <button onClick={async (evt) => await handleSubmit(evt)}>Add!</button>
          </FormGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
