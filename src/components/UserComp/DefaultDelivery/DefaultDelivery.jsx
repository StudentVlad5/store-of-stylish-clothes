import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectId } from 'redux/auth/selectors';
import { useAuth } from 'hooks/useAuth';
import { update } from 'redux/auth/operations';
// import schemas from 'utils/schemas';
import { Error, ProfileLabel, ProfileList } from '../Profile/Profile.styled';
import {
  BtnContainer,
  BtnBrown,
  BtnLight,
  PensilStyle,
} from '../UserData/UserData.styled';
import {
  ProfileInputSelect,
  EditBtn,
  Input,
  Label,
} from './DefaultDelivery.styled';
import { useTranslation } from 'react-i18next';

export const DefaultDelivery = () => {
  const {t} = useTranslation();
  const [isShown, setIsShown] = useState(false);
  const id = useSelector(selectId);
  let { userIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      {!isShown && (
        <Label>
          <Input>{userIn.delivery}</Input>
          <EditBtn onClick={() => setIsShown(true)}>
            <PensilStyle />
          </EditBtn>
        </Label>
      )}
      {isShown && (
        <Formik
          initialValues={{
            delivery: userIn?.delivery ? userIn.delivery : '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(update({ ...values, id }));
            setSubmitting(false);
            setIsShown(false);
          }}
          enableReinitialize={true}
          //   validationSchema={schemas.updateSchema}
        >
          {({
            handleSubmit,
            handleChange,
            isSubmitting,
            values,
            errors,
            touched,
          }) => (
            <ProfileList
              autoComplete="off"
              onSubmit={handleSubmit}
              onChange={handleChange}
            >
              <ProfileLabel htmlFor="delivery">
                <ProfileInputSelect
                  as="select"
                  name="delivery"
                  id="delivery"
                  value={values.delivery}
                  onChange={handleChange}
                >
                  <option value="">{t("Select a delivery")}</option>
                  <option value="Nova Poshta">{t("Nova Poshta")}</option>
                  <option value="Ukr Poshta">{t("Ukr Poshta")}</option>
                  <option value="Courier delivery">{t("Courier delivery")}</option>
                </ProfileInputSelect>
                {errors.delivery && touched.delivery ? (
                  <Error>{errors.delivery}</Error>
                ) : null}
              </ProfileLabel>

              <BtnContainer>
                <BtnLight
                  type="button"
                  aria-label="Close"
                  onClick={() => setIsShown(false)}
                >
                  {t("CANCEL")}
                </BtnLight>
                <BtnBrown
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                >
                  {t("SAVE")}
                </BtnBrown>
              </BtnContainer>
            </ProfileList>
          )}
        </Formik>
      )}
    </>
  );
};
