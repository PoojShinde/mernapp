import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div>    
    <footer class="bg-dark text-center text-white container-fluid" >
        
        <div class="container-fluid p-4 pb-0">
          
          <section class="mb-4">
            
            <Link class="btn btn-outline-light btn-floating m-1" to="/" role="button"
              ><i class="fab fa-instagram"></i
            ></Link>
      
            
            <Link class="btn btn-outline-light btn-floating m-1" to="#/" role="button"
              ><i class="fab fa-twitter"></i
            ></Link>
      
           
            <Link class="btn btn-outline-light btn-floating m-1" to="/" role="button"
              ><i class="fab fa-google"></i
            ></Link>
      
            
            <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i class="fab fa-instagram"></i
            ></Link>
      
            
            <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i class="fab fa-linkedin-in"></i
            ></Link>
      
            
            <Link class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i class="fab fa-github"></i
            ></Link>
          </section>
          
        </div>
       
        
        <div class="text-center p-3" >
          © 2023 Copyright:
          <Link class="text-white" to="#">pooja shinde</Link>
        </div>
        
      </footer>
  
</div>

  )
}
