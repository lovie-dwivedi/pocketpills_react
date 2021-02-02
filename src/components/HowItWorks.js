import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Header from '../common/Header';
import Navigator from './howitworks/Navigator';
import Services from './howitworks/Services';
import ServicesEven2 from './howitworks/ServicesEven2';
import ServicesEven4 from './howitworks/ServicesEven4';
import ServicesOdd from './howitworks/ServicesOdd';
import Footer from '../common/Footer';
import API_URL from '../config';

export default function HowItWorks(props) {

  const [data, setData] = useState([]);
  const [dataOdd, setDataOdd] = useState([]);

    useEffect(() => {
      if(sessionStorage.getItem("lang")==="english"){
          axios
            .get(`${API_URL}/service-odd-3-s`)
            .then(res => {
              //console.log(res)
              setData(res.data)
            })
            .catch(err => {
              console.log(err)
            })
        }
        else{
          axios
            .get(`${API_URL}/service-odd-3-frenches`)
            .then(res => {
              //console.log(res)
              setData(res.data)
            })
            .catch(err => {
              console.log(err)
            })
        } 
    },[sessionStorage.getItem("lang")])
  
    useEffect(() => {
      if(sessionStorage.getItem("lang")==="english"){
          axios
            .get(`${API_URL}/service-odd-5-s`)
            .then(res => {
              //console.log(res)
              setDataOdd(res.data)
            })
            .catch(err => {
              console.log(err)
            })
        }
        else{
          axios
            .get(`${API_URL}/service-odd-5-frenches`)
            .then(res => {
              //console.log(res)
              setDataOdd(res.data)
            })
            .catch(err => {
              console.log(err)
            })
        } 
    },[sessionStorage.getItem("lang")])


  //console.log(">>>>>>"+data);
  //console.log(">>>>>>"+detailsEven);
  //console.log(">>>>>>"+detailsOdd);
    return (
        <>

            <Header/>
            <Navigator/>
            <Services 
            number="1"
            
            />
            
            <ServicesEven2 
            number="2"
            />

            <ServicesOdd 
            number="3" 
            data={data}
            />
            
            <ServicesEven4 
            number="4"
            />
            
            <ServicesOdd 
            number="5" 
            data={dataOdd}
            />

            <Footer/>
        </>
    )
}
