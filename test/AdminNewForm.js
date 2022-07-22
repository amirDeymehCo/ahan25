import * as Yup from 'yup';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import {
  Autocomplete,
  Box,
  Card,
  Checkbox,
  Chip,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
import fakeRequest from '../../../utils/fakeRequest';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import axios from '../../../utils/axiosinstance';

// ----------------------------------------------------------------------

AdminNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentAdmin: PropTypes.object,
};

const PERMISSIONS = [
  'نمایش لیست محصولات',
  'ویرایش محصولات',
  'نمایش پست های بلاگ',
  'ویرایش بلاگ',
  'نمایش لیست سفارشات',
  'ویرایش سفارشات',
  'ویرایش اطلاعات سایت',
  'نمایش آمار',
  'نمایش لیست کاربران',
];

const convertToEn = [
  { id: '1', fa: 'نمایش لیست محصولات', en: 'see_product' },
  { id: '2', fa: 'ویرایش محصولات', en: 'change_product' },
  { id: '3', fa: 'نمایش پست های بلاگ', en: 'see_blogs' },
  { id: '4', fa: 'ویرایش بلاگ', en: 'change_blogs' },
  { id: '5', fa: 'نمایش لیست سفارشات', en: 'see_orders' },
  { id: '6', fa: 'ویرایش سفارشات', en: 'change_orders' },
  { id: '7', fa: 'ویرایش اطلاعات سایت', en: 'change_siteInfo' },
  { id: '8', fa: 'نمایش آمار', en: 'see_statistics' },
  { id: '9', fa: 'نمایش لیست کاربران', en: 'see_siteUsers' },
];

export default function AdminNewForm({ isEdit, currentAdmin }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const selectedAdmin = () => {
    const persianPermissions = currentAdmin?.permissions.map((c) => {
      return convertToEn.find((cc) => cc.en === c).fa;
    });
    const findC = [];
    for (let i = 0; i < persianPermissions.length; i++) {
      const f = PERMISSIONS.find((p) => p === persianPermissions[i]);
      if (f) findC.push(f);
    }
    return findC;
  };
  const NewUserSchema = Yup.object().shape({
    fullName: Yup.string().required(' نام الزامی است'),
    email: Yup.string().required('ایمیل الزامی است').email(),
    phone: Yup.string().required('شماره همراه الزامی است'),
    userName: Yup.string().required('نام کاربری الزامی است'),
    pass: Yup.string()
      .min(8, 'رمز حداقل باید دارای 8 کاراکتر باشد')
      .required('رمزعبور الزامی است'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: currentAdmin?.fullName || '',
      email: currentAdmin?.email || '',
      phone: currentAdmin?.phone || '',
      userName: currentAdmin?.userName || '',
      pass: currentAdmin?.pass || '',
      isSuperAdmin: currentAdmin?.isSuperAdmin || '',
      permissions: currentAdmin ? selectedAdmin() : [],
    },
    validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      const {
        fullName,
        pass,
        isSuperAdmin,
        phone,
        email,
        permissions,
        userName,
      } = values;

      const check = permissions.map((c) => {
        return convertToEn.find((cc) => cc.fa === c).en;
      });
      try {
        if (!isEdit) {
          const { data } = await axios.post('admin/createAdmin', {
            fullName,
            pass,
            isSuperAdmin,
            phone,
            email,
            permissions: check,
            userName,
          });
          if (data.code === 200) {
            enqueueSnackbar('ساخت موفق ادمین', { variant: 'success' });
            navigate(PATH_DASHBOARD.admin.list);
            resetForm();
          } else {
            enqueueSnackbar(data.msg, { variant: 'error' });
          }
          setSubmitting(false);
        } else {
          const { data } = await axios.post('admin/editOtherAdmins', {
            userName: currentAdmin.userName,
            update: {
              fullName,
              phone,
              email,
              userName,
              isAdministrator: false,
              permissions: check,
              isSuperAdmin,
            },
          });
          if (data.code === 200) {
            enqueueSnackbar('ویرایش موفق اطلاعات ادمین', {
              variant: 'success',
            });
            navigate(PATH_DASHBOARD.admin.list);
          } else {
            enqueueSnackbar(data.msg, { variant: 'error' });
          }
          resetForm();
          setSubmitting(false);
        }
      } catch (error) {
        enqueueSnackbar(error, { variant: 'error' });
        console.log(error);

        setSubmitting(false);
        setErrors(error);
      }
    },
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete onSubmit={handleSubmit}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 3, sm: 2 }}
                >
                  <TextField
                    disabled={!!isEdit}
                    fullWidth
                    label="نام"
                    {...getFieldProps('fullName')}
                    error={Boolean(touched.fullName && errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                  />
                  <TextField
                    disabled={!!isEdit}
                    fullWidth
                    label="ایمیل"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 3, sm: 2 }}
                >
                  <TextField
                    disabled={!!isEdit}
                    fullWidth
                    label="نام کاربری"
                    {...getFieldProps('userName')}
                    error={Boolean(touched.userName && errors.userName)}
                    helperText={touched.userName && errors.userName}
                  />
                  {!isEdit && (
                    <TextField
                      fullWidth
                      label="رمز عبور"
                      {...getFieldProps('pass')}
                      error={Boolean(touched.pass && errors.pass)}
                      helperText={touched.pass && errors.pass}
                    />
                  )}
                </Stack>
                <Stack spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    disabled={isEdit ? true : false}
                    fullWidth
                    label="شماره همراه"
                    {...getFieldProps('phone')}
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Stack>
                <Stack spacing={{ xs: 3, sm: 2 }}>
                  <Autocomplete
                    fullWidth
                    multiple
                    value={
                      values.isSuperAdmin ? PERMISSIONS : values.permissions
                    }
                    onChange={(event, newValue) => {
                      setFieldValue('permissions', newValue);
                    }}
                    noOptionsText={'گزینه دیگری وجود ندارد'}
                    options={PERMISSIONS}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox checked={selected} />
                        {option}
                      </li>
                    )}
                    renderInput={(params) => {
                      return (
                        <TextField
                          {...params}
                          label="دسترسی ها"
                          placeholder=" "
                        />
                      );
                    }}
                  />
                </Stack>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 3, sm: 2 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...getFieldProps('isSuperAdmin')}
                        checked={values.isSuperAdmin}
                      />
                    }
                    label="سوپر ادمین"
                    sx={{ mb: 2 }}
                  />
                </Stack>

                <Box
                  sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    {!isEdit ? 'ساخت ادمین جدید' : 'ذخیره تغییرات'}
                  </LoadingButton>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
