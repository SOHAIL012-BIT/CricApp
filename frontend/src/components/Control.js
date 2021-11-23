import '../App.css';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';



const validationSchema = yup.object({
    post: yup
        .string('Enter your password')
        .min(2, 'Name should be of minimum 4 characters length')
        .required('Name is required'),

});





function Control() {

    const [score, setScore] = useState({
        post: "",
        runs: "",
        overs: "",
        teamA: "",
        teamB: "",
        wicket: "",
        batsmanA: "",
        batsmanB: "",
        batsmanAruns: "",
        batsmanBruns: "",
        batsmanAballs: "",
        batsmanBballs: "",
        bowlerA: "",
        bowlerB: "",
        bowlerAruns: "",
        bowlerBruns: "",
        bowlerAover: "",
        bowlerBover: "",
        bowlerAwickets: "",
        bowlerBwickets: "",
        target: "",
        runrate: "",
    })

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/score`)
            .then(response => {
                console.log(response.data)
                setScore(response.data)
                console.log(score)
            })
            .catch(err => alert("Error in getting data"))
    }, [])



    const submit = (values) => {

        console.log("values", values)

        axios.post(`${baseurl}/api/v1/post`,
            {
                post: values.post,
                runs: values.runs,
                overs: values.overs,
                teamA: values.teamA,
                teamB: values.teamB,
                wicket: values.wicket,
                batsmanA: values.batsmanA,
                batsmanB: values.batsmanB,
                batsmanAruns: values.batsmanAruns,
                batsmanBruns: values.batsmanBruns,
                batsmanAballs: values.batsmanAballs,
                batsmanBballs: values.batsmanBballs,
                bowlerA: values.bowlerA,
                bowlerB: values.bowlerB,
                bowlerAruns: values.bowlerAruns,
                bowlerBruns: values.bowlerBruns,
                bowlerAover: values.bowlerAover,
                bowlerBover: values.bowlerBover,
                bowlerAwickets: values.bowlerAwickets,
                bowlerBwickets: values.bowlerBwickets,
                target: values.target,
                runrate: values.runrate,
            }
        )


            .then(res => {
                console.log("postdata", res.data);
                setScore(res.data)


            })
    }










    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            post: '',
            runs: score.runs,
            overs: score.overs,
            wicket: '',
            teamA: score.teamA,
            teamB: '',
            batsmanA: '',
            batsmanB: '',
            batsmanAruns: '',
            batsmanBruns: '',
            batsmanAballs: '',
            batsmanBballs: '',
            bowlerA: '',
            bowlerB: '',
            bowlerAruns: '',
            bowlerBruns: '',
            bowlerAover: '',
            bowlerBover: '',
            bowlerAwickets: '',
            bowlerBwickets: '',
            target: '',
            runrate: '',

        },
        onSubmit: submit
    },
    );

    return (
        <>
            <div className="app-main">
                <div className="post-main">

                    <form id="post-form" onSubmit={formik.handleSubmit}>

                        <h3 className="side"> Score Control Panel</h3>
                        <h1>{score.teamA}</h1>

                        <div className="teamcontrol">

                            <TextField
                                id="outlined-basic"
                                name="teamA"
                                label="teamA"
                                type="text"
                                className="box"
                                id="team"

                                value={score.teamA}
                                // onChange={formik.handleChange}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, teamA: e.target.value }
                                    })
                                }}


                                error={formik.touched.caption && Boolean(formik.errors.caption)}
                                helperText={formik.touched.caption && formik.errors.caption}

                                variant="outlined" />

                            <TextField
                                id="outlined-basic"
                                name="teamB"
                                label="teamB"
                                type="text"
                                className="box"
                                id="team"

                                value={formik.values.teamB}
                                onChange={formik.handleChange}


                                error={formik.touched.caption && Boolean(formik.errors.caption)}
                                helperText={formik.touched.caption && formik.errors.caption}

                                variant="outlined" />

                        </div>


                        <div className="control">
                            <div className="battingcontrol">

                                <h3 className="side">Batting Side</h3>
                                <TextField
                                    id="outlined-basic"
                                    name="post"
                                    label="format"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    // value={score.post}
                                    // onChange={(e) => {
                                    //     setScore((prev) => {
                                    //         return { ...prev, post: e.target.value }
                                    //     })
                                    // }}
                                    value={formik.values.post}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runs"
                                    label="runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.runs}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="wicket"
                                    label="wicket"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.wicket}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanA"
                                    label="batsmanA"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.batsmanA}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAruns"
                                    label="batsmanAruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.batsmanAruns}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAballs"
                                    label="batsmanAballs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.batsmanAballs}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanB"
                                    label="batsmanB"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.batsmanB}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBruns"
                                    label="batsmanBruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.batsmanBruns}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBballs"
                                    label="batsmanBballs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.batsmanBballs}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runrate"
                                    label="runrate"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.runrate}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                            </div>

                            <hr />

                            <div className="bowlingcontrol">
                                <h3 className="side">Bowling Side</h3>

                                <TextField
                                    id="outlined-basic"
                                    name="overs"
                                    label="overs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.overs}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="target"
                                    label="target"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.target}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerA"
                                    label="bowlerA"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerA}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAruns"
                                    label="bowlerAruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerAruns}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAwickets"
                                    label="bowlerAwickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerAwickets}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAover"
                                    label="bowlerAover"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerAover}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerB"
                                    label="bowlerB"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerB}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBruns"
                                    label="bowlerBruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerBruns}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBwickets"
                                    label="bowlerBwickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerBwickets}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBover"
                                    label="bowlerBover"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.bowlerBover}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                            </div>

                        </div>
                        <Button id="btn" variant="contained" color="success" type="submit">
                            Update
                        </Button>
                    </form>
                </div>
            </div>



        </>
    );
}

export default Control;

