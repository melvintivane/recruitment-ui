import API_ENDPOINTS from "../config/api";

export const downloadCv = async (filename) => {
  const response = await fetch(`${API_ENDPOINTS.CV_DOWNLOAD}/${filename}`, {
    method: "GET",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(errorBody || "Failed to download CV");
  }

  return response.blob();
};

export const getCandidateById = async (candidateId) => {
  const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/${candidateId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch candidate with ID: ${candidateId}`);
  }

  return response.json();
};

export const updateProfile = async (
  candidateId,
  userData,
  imageFile = null,
  cvFile = null
) => {
  const formData = new FormData();

  formData.append(
    "dto",
    new Blob([JSON.stringify(userData)], {
      type: "application/json",
    })
  );

  if (imageFile) {
    formData.append("imageFile", imageFile);
  }
  if (cvFile) {
    formData.append("cvFile", cvFile);
  }

  try {
    const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/${candidateId}`, {
      method: "PUT",
      // headers: {
      //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
      // },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao atualizar candidato");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
