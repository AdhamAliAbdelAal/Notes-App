<Button
                variant="contained"
                color="secondary"
                disableElevation
                startIcon={<AddLocationAltTwoToneIcon />}
                className={classes.classOne}
            >
                bethazzar
            </Button>
            <ThemeProvider theme={themeOne}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    startIcon={<AddLocationAltTwoToneIcon />}
                >
                    calisy
                </Button>
            </ThemeProvider>
            <br />
            <TextField
            sx={{
                "& div:hover" :{
                    "& fieldset":{
                        borderColor:`#9c27b0 !important`
                    }
                }
            }}
                label="Note Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                multiline
                rows={4}
            />