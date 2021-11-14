import { useEffect, useState } from 'react';
import './App.css';
import 'emoji-slider';



function App() {

  const [error, setError] = useState("");

  useEffect(() => {
    setError("")
  }, [])

  const validateForm = (event) => {
    event.preventDefault();
    const subject = document.getElementById("Subj").value;
    const staff = document.getElementById("staff").value;
    const feedback = document.getElementById("Feedback").value;
    const contentMaterial = document.getElementById("Material").value;
    const followups = document.getElementById("FollowUps").value;
    const topic = document.getElementById("Topic").value;
    const beg = document.getElementById("Beg").value;
    const end = document.getElementById("End").value;
    const WL = document.getElementById("Workload").value;
    const PL = document.getElementById("Puctuality").value;
    const CL = document.getElementById("Compl").value;
    if(subject == "" ||
    staff == "" ||
    feedback == "" ||
    contentMaterial == "" ||
    followups == ""||
    topic == ""||
    end==""||
    beg==""||
    WL==""||
    PL==""||
    CL=="")
      alert("Enter Details Correctly");
    else {
      setError("");
      document.getElementById("Subj").value="";
     document.getElementById("staff").value="";
      document.getElementById("Feedback").value="";
    document.getElementById("Material").value="";
    document.getElementById("FollowUps").value="";
     document.getElementById("clarity").value=0;
     document.getElementById("SubjK").value=0;
     document.getElementById("Topic").value=0;
    document.getElementById("Interaction").value=0;
    document.getElementById("Correction").value=0;
    document.getElementById("star-1").checked=false;
    document.getElementById("star-2").checked=false;
    document.getElementById("star-3").checked=false;
    document.getElementById("star-4").checked=false;
    document.getElementById("star-5").checked=false;
     
      alert("Thank You!");
    }
  }
  return (
    <div className="App">
      <div class="App-header">
        <h1> FEEDBACK FORM </h1>
      </div>
      _________________________________________________________________________________________________________________________________________________________
      <form className="main" onSubmit={validateForm}>
        <br />
        <label for="Subj" class="form-label">Subject</label>
        <input class="form-control" type="text" list="datalistOptions" id="Subj" placeholder="Type to search..." />
        <datalist id="datalistOptions">
          <option value="Physics" />
          <option value="Mathematics" />
          <option value="Chemistry" />
          <option value="English" />
          <option value="Computer Science" />
        </datalist>
        <label for="Topic" class="form-label">Topic</label>
        <input class="form-control" type="text" list="datalis" id="Topic" placeholder="Type to search..." />
        <datalist id="datalis">
          <option value="Topic 1" />
          <option value="Topic 2" />
          <option value="Topic 3" />
          <option value="Topic 4" />
          <option value="Topic 5" />
        </datalist>
        <br />
        <label for="staff" class="form">Staff</label>
        <input class="form-control" list="data" type="text" id="staff" placeholder="Type to search..." />
        <datalist id="data">
          <option value="Sumithra" />
          <option value="Jerin Mahiba" />
          <option value="Subashini" />
          <option value="Nithya" />
          <option value="Amudha" />
        </datalist>
        <br />
        <label for="clarity" class="form-label">Clarity in Teaching</label>
        
        <input type="range" class="form-range" min="0" max="5" id="clarity" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  
        <br />
        <div class="rating">
          <label for="rating" class="form-label">Rating</label>
          <div class="container d-flex justify-content-center mt-200">
            <div class="row">
              <div class="col-md-12">
                <div class="stars">
                <form action=""> <input class="star star-5" id="star-5" type="radio" value="5" name="star" /> <label class="star star-5" for="star-5"></label> <input class="star star-4" id="star-4" type="radio" value="4" name="star" /> <label class="star star-4" for="star-4"></label> <input class="star star-3" id="star-3" type="radio" value="3" name="star" /> <label class="star star-3" for="star-3"></label> <input class="star star-2" id="star-2" type="radio" value="2" name="star" /> <label class="star star-2" for="star-2"></label> <input class="star star-1" id="star-1" type="radio" value="1" name="star" /> <label class="star star-1" for="star-1"></label> </form>
                  <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <label for="SubjK" class="form-label">Subject Knowledge</label>
        <input type="range" class="form-range" min="0" max="5" id="SubjK" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  
        <br />
        <label for="Beg" class="form-label">Your knowledge at the beginning of the Topic </label>
       
        <input type="range" class="form-range" min="0" max="5" id="Beg" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  
        <br />
        <label for="End" class="form-label">Your knowledge at end of the Topic</label>
        
        <input type="range" class="form-range" min="0" max="5" id="End" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                   <br />
        <label for="Workload" class="form-label">Topic Workload</label>
        <input type="range" class="form-range" min="0" max="5" id="Workload" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  <br />
        
        <label for="punctuality" class="form-label">Punctuality</label>
        <input type="range" class="form-range" min="0" max="5" id="punctuality" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  <br />
        <label for="Material" class="form-label">Content Material  </label>
        <select class="form-select" aria-label="Default select example" id="Material">
          <option selected></option>
          <option value="1">Simple</option>
          <option value="2">Adequate</option>
          <option value="3">Complex</option>
        </select>
        <br />

        <label for="FollowUps" class="form-label">Follow ups  </label>
        <select class="form-select" aria-label="Default select example" id="FollowUps">
          <option selected></option>
          <option value="1">Regular</option>
          <option value="2">Irregular</option>
        </select>

        <br />
        <label for="Topic" class="form-label">Topic Coverage</label>
        <input type="range" class="form-range" min="0" max="5" id="Topic" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  
        <br />
        <label for="Compl" class="form-label">Syllabus Completion</label>
        <input type="range" class="form-range" min="0" max="5" id="Compl" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  
        <br />
        <label for="Correction" class="form-label">Correction Transparency</label>
        <input type="range" class="form-range" min="0" max="5" id="Correction" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                    <br />

        <label for="Interraction" class="form-label">Student Interaction</label>
        <input type="range" class="form-range" min="0" max="5" id="Interaction" />
        <div className="set">min=0 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; max=5</div>
                  <br />
        
        <div class="mb-3">
          <label for="Feedback" class="form-label">Feedback   </label><br  /><br  />
          <textarea class="form-control" type="text" row="2" id="Feedback" />
        
          <div className="errorMessage">{error}</div>
        <br />
        </div>
        <input type="submit" class="btn btn-primary" Submit />
      </form>
      <br />
    </div>
  );
}

export default App;
