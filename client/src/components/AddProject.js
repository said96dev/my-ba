import React , {useState , useContext , useEffect} from 'react'
import Wrapper from '../assets/wrappers/ProjectPage'
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
    } from "@material-ui/core";
import { AppContext } from '../context/appContext';
import {  FormRow, Alert  , FormRowSelect, SelectUser ,DatePicker } from "../components"
    const BasicInformaionForm = ({values , handleChange}) => {
      const { clients } = useContext(AppContext)
      return (
        <div className='project-form '>
          <div className='basic-informaion-form'>
          <FormRow
                    type='text'
                    name='name'
                    labelText='Project Name '
                    value={values.name}
                    handleChange={handleChange}
            />
            <SelectUser
                    labelText='Client'
                    name='client'
                    value={values.client}
                    handleChange={handleChange}
                    list= {[...clients]}
                    multiple = {false}
            />
          </div>
        </div>
      );
    };
    const PrjectDetailsForm = ({values , handleChange}) => {
      
      return (
        <div className='project-form '>
          <div className='project-details-form'>
          <FormRowSelect
            labelText='Status'
            name='projectStatus'
            value={values.projectStatus}
            handleChange={handleChange}
            list={[ 'new' ,"open" ]}
          />
          <FormRowSelect
            labelText='Priority'
            name='priority'
            value={values.priority}
            handleChange={handleChange}
            list={ ['low', 'medium' ,"high"]}
          />
          <DatePicker
          labelText='Deadline'
          name='dueDate'
          value={values.dueDate}
          handleChange={handleChange}
          disablePast = {true}
        />
          </div>
        </div>
      );
    };
    const DescriptonInformationForm = ({values , handleChange}) => {
      
      return (
        <div className='project-form '>
          <div className='description-information-form'>
          <FormRow
          type='text'
          name='description'
          labelText='description'
          value={values.description}
          handleChange={handleChange}
          multiline={true}
          rows={5}
          rowsMax={10}
          fullWidth={true}
          className="full-row"

        />
          </div>
        </div>
      );
    };
    const PermissionsForm = ({values , handleChange}) => {
      const { employeeOptionen } = useContext(AppContext)
      return (
        <div className='project-form'>
          <div className='presmission-form'>
          <FormRowSelect
            labelText='Team'
            name='team'
            value={values.team}
            handleChange={handleChange}
            list={ ['T1', 'T2' ,"T3" , "T4" , "T5" ]}
          />
          <SelectUser
            labelText='Project Leader'
            name='projectLeader'
            value={values.projectLeader}
            handleChange={handleChange}
            list={ [...employeeOptionen ]}
          />
          </div>
        </div>
      );
    };
    
    const useStyles = makeStyles((theme) => ({
        button: {
            backgroundColor: "#2196f3" ,
            marginRight: theme.spacing(2),
            transition: "0.3s ease-in-out all",
            color:"#fff" ,
            "&:hover": {
              backgroundColor: "#1e88e5" ,
              boxShadow : " 0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }
          },
      }));
      function getSteps() {
        return [
          "Basic information",
          "Project Details",
          "Description Information",
          "Permissions",
        ];
      }
      function getStepContent(step , values , setValues ,  handleChange) {
        switch (step) {
          case 0:
            return <BasicInformaionForm values = {values} setValues = {setValues}  handleChange={handleChange}/>;
          case 1:
            return <PrjectDetailsForm values = {values} setValues = {setValues}  handleChange={handleChange}/>;
          case 2:
            return <DescriptonInformationForm values = {values} setValues = {setValues}  handleChange={handleChange}/>;
          case 3:
            return <PermissionsForm values = {values} setValues = {setValues}  handleChange={handleChange}/>;
          default:
            return "unknown step";
        }
      }
      
function AddProject() {
  const initialState = {
    name : "" , 
    client:  "",
    projectStatus: "",
    projectLeader : "",
    team : "" , 
    dueDate : Date.now() , 
    description : "" ,
    priority: "" ,
    priorityOptionen:['low', 'medium' ,"high"],
    teamOptionen: ['T1 ', 'T2' ,"T3" , "T4" , "T5" ],
    projectStatusOptionen: [ 'new' ,"open" ],
  }
    const { alertText , showAlert ,addProject } = useContext(AppContext)
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const [values , setValues] = useState(initialState)
    useEffect (() => {
      
      if(alertText === "New Project Created!")
      {
        clearValues()
      }
      // eslint-disable-next-line 
    } , [alertText])
    const steps = getSteps();
    const isStepOptional = (step) => {
        return step === 2;
      };
    
      const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
      };
    
      const handleNext = (data) => {
        data.preventDefault()
        if (activeStep === steps.length - 1) {
            addProject(values)
            setActiveStep(activeStep - 3);
        } else {
          setActiveStep(activeStep + 1);
          setSkippedSteps(
            skippedSteps.filter((skipItem) => skipItem !== activeStep)
          );
        }
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
    
      const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
          setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
      };

      const clearValues = () => {
        setValues(initialState)
      }
      const handleChange = (e) => {
        
        setValues({...values , [e.target.name] : e.target.value})
      }
    return (
    
    <Wrapper>
     
        <div className='form'>
        {showAlert && <Alert />}
        <h3 className= 'page-center'> Project / Add New Project
        </h3>
            <div >
            <Stepper alternativeLabel activeStep={activeStep} className="stepper nodisplay ">
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index} >
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      
          <div >
            <form  onSubmit={handleNext}>
              <div>
              {getStepContent(activeStep , values, setValues,  handleChange)}
              </div>
              
              <div className='stepper-btn-container'>
                <Button disabled={activeStep === 0} onClick={handleBack} >
                  back
                </Button>
                <div>
                {isStepOptional(activeStep) && (
                <Button
                className={classes.button}
                variant="contained"
                onClick={handleSkip}
                >
                skip
                </Button>
                )}
                <Button
                variant="contained"
                onClick={handleNext}
                type="submit"
                className={classes.button}
                >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
                </div>
                
              </div>
              
            </form>
          </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default AddProject