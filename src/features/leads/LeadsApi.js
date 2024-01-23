const { Api } = require("../Api");

export const LeadsApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    getLeads: builder.query({
      query: () => ({
        url: "/leads",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetLeadsQuery } = LeadsApi;
