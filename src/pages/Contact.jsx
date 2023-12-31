import Grid from "@mui/material/Unstable_Grid2";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  TextField,
  Button,
  
} from "@mui/material";
import { Face, Email } from "@mui/icons-material";
import { useFormik } from "formik";
import { contactValidatonSchema } from "./validations/contactValidation";
const Contact = () => {
  const contactInputNames = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      formik.setFieldValue("recaptcha", values);
    },
    validationSchema: contactValidatonSchema,
  });

  return (
    <Grid container sx={{ px: 5, justifyContent: "center", width: 1 }}>
      <Card sx={{ px: 10, py: 2, backgroundColor: "transparent" }}>
        <Typography sx={{ mb: 1 }} color="black">
          ارتباط با من
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <Grid container xs={12} sx={{ gap: 1 }}>
              <Grid item sx={{ width: 1 }}>
                <TextField
                  id=""
                  type="text"
                  label="نام و نام خانوادگی"
                  name="fullName"
                  size="small"
                  variant="outlined"
                  color="error"
                  sx={{
                    py: 2,
                    width: 1,
                    input: { color: "black" },
                    label: { color: "grey" },
                    direction: "ltr",
                    "& label.Mui-focused": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "& .MuiInputBase-root": {
                          color: "black",
                        },
                      },
                    },
                  }}
                  value={formik.values?.fullName}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.fullName && formik.errors.fullName
                  )}
                  helperText={
                    formik.touched.fullName ? formik.errors.fullName : null
                  }
                  InputProps={{
                    endAdornment: (
                      <Face position="end" sx={{ color: "black" }} />
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ width: 1 }}>
                <TextField
                  id=""
                  type="text"
                  label="ایمیل"
                  variant="outlined"
                  name="email"
                  size="small"
                  color="error"
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email ? formik.errors.email : null}
                  sx={{
                    py: 2,
                    width: 1,
                    input: { color: "black" },
                    label: { color: "grey" },
                    direction: "ltr",
                    "& label.Mui-focused": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "& .MuiInputBase-root": {
                          color: "black",
                        },
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <Email position="end" sx={{ color: "black" }} />
                    ),
                  }}
                />
              </Grid>
              <Grid item sx={{ width: 1 }}>
                <TextField
                  id=""
                  type="text"
                  label="موضوع"
                  name="subject"
                  size="small"
                  variant="outlined"
                  color="error"
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  sx={{
                    py: 2,
                    width: 1,
                    input: { color: "black" },
                    label: { color: "grey" },
                    direction: "ltr",
                    "& label.Mui-focused": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "& .MuiInputBase-root": {
                          color: "black",
                        },
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item sx={{ width: 1 }}>
                <TextField
                  id=""
                  type="text"
                  multiline
                  rows={3}
                  label="متن پیام"
                  name="message"
                  variant="outlined"
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  color="error"
                  sx={{
                    py: 2,
                    width: 1,
                    textarea: { color: "black" },
                    label: { color: "grey" },
                    direction: "ltr",
                    "& label.Mui-focused": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "& .MuiInputBase-root": {
                          color: "black",
                        },
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid item>
              <ReCAPTCHA
                sitekey={
                  process.env.REACT_APP_RECAPTHCHA_SITE_KEY
                }
                onChange={(value) => {
                  formik.setFieldValue("recaptcha", value);
                }}
                hl="fa"
                variant="caption"
              />
              {
                    formik.touched.message && formik.errors.message &&(<Typography color="error.main">{formik.errors.recaptcha}</Typography>)
            }
            </Grid>
            
            <Button
              sx={{ backgroundColor: "success" }}
              type="submit"
              size="large"
              variant="contained"
            >
              ارسال
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  );
};
export default Contact;
