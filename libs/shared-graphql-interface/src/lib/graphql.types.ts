export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  name: Scalars['String'];
  streetAddress: Scalars['String'];
};

export type AddressCreateInput = {
  name: Scalars['String'];
  streetAddress: Scalars['String'];
};

export type AddressObjectEqualityInput = {
  name: Scalars['String'];
  streetAddress: Scalars['String'];
};

export type AddressOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateApplication = {
  __typename?: 'AggregateApplication';
  _count?: Maybe<ApplicationCountAggregate>;
  _max?: Maybe<ApplicationMaxAggregate>;
  _min?: Maybe<ApplicationMinAggregate>;
};

export type AggregateJob = {
  __typename?: 'AggregateJob';
  _count?: Maybe<JobCountAggregate>;
  _max?: Maybe<JobMaxAggregate>;
  _min?: Maybe<JobMinAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Application = {
  __typename?: 'Application';
  candidate: User;
  candidateId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  job: Job;
  jobId: Scalars['String'];
  status: Status;
};

export type ApplicationCountAggregate = {
  __typename?: 'ApplicationCountAggregate';
  _all: Scalars['Int'];
  candidateId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  jobId: Scalars['Int'];
  status: Scalars['Int'];
};

export type ApplicationCountOrderByAggregateInput = {
  candidateId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type ApplicationCreateInput = {
  candidate: UserCreateNestedOneWithoutApplicationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  job: JobCreateNestedOneWithoutApplicationsInput;
  status?: InputMaybe<Status>;
};

export type ApplicationCreateManyCandidateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  jobId: Scalars['String'];
  status?: InputMaybe<Status>;
};

export type ApplicationCreateManyCandidateInputEnvelope = {
  data: Array<ApplicationCreateManyCandidateInput>;
};

export type ApplicationCreateManyInput = {
  candidateId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  jobId: Scalars['String'];
  status?: InputMaybe<Status>;
};

export type ApplicationCreateManyJobInput = {
  candidateId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type ApplicationCreateManyJobInputEnvelope = {
  data: Array<ApplicationCreateManyJobInput>;
};

export type ApplicationCreateNestedManyWithoutCandidateInput = {
  connect?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationCreateOrConnectWithoutCandidateInput>>;
  create?: InputMaybe<Array<ApplicationCreateWithoutCandidateInput>>;
  createMany?: InputMaybe<ApplicationCreateManyCandidateInputEnvelope>;
};

export type ApplicationCreateNestedManyWithoutJobInput = {
  connect?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationCreateOrConnectWithoutJobInput>>;
  create?: InputMaybe<Array<ApplicationCreateWithoutJobInput>>;
  createMany?: InputMaybe<ApplicationCreateManyJobInputEnvelope>;
};

export type ApplicationCreateOrConnectWithoutCandidateInput = {
  create: ApplicationCreateWithoutCandidateInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationCreateOrConnectWithoutJobInput = {
  create: ApplicationCreateWithoutJobInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationCreateWithoutCandidateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  job: JobCreateNestedOneWithoutApplicationsInput;
  status?: InputMaybe<Status>;
};

export type ApplicationCreateWithoutJobInput = {
  candidate: UserCreateNestedOneWithoutApplicationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type ApplicationGroupBy = {
  __typename?: 'ApplicationGroupBy';
  _count?: Maybe<ApplicationCountAggregate>;
  _max?: Maybe<ApplicationMaxAggregate>;
  _min?: Maybe<ApplicationMinAggregate>;
  candidateId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  jobId: Scalars['String'];
  status: Status;
};

export type ApplicationListRelationFilter = {
  every?: InputMaybe<ApplicationWhereInput>;
  none?: InputMaybe<ApplicationWhereInput>;
  some?: InputMaybe<ApplicationWhereInput>;
};

export type ApplicationMaxAggregate = {
  __typename?: 'ApplicationMaxAggregate';
  candidateId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

export type ApplicationMaxOrderByAggregateInput = {
  candidateId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type ApplicationMinAggregate = {
  __typename?: 'ApplicationMinAggregate';
  candidateId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

export type ApplicationMinOrderByAggregateInput = {
  candidateId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByWithAggregationInput = {
  _count?: InputMaybe<ApplicationCountOrderByAggregateInput>;
  _max?: InputMaybe<ApplicationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ApplicationMinOrderByAggregateInput>;
  candidateId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type ApplicationOrderByWithRelationInput = {
  candidate?: InputMaybe<UserOrderByWithRelationInput>;
  candidateId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<JobOrderByWithRelationInput>;
  jobId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export enum ApplicationScalarFieldEnum {
  CandidateId = 'candidateId',
  CreatedAt = 'createdAt',
  Id = 'id',
  JobId = 'jobId',
  Status = 'status'
}

export type ApplicationScalarWhereInput = {
  AND?: InputMaybe<Array<ApplicationScalarWhereInput>>;
  NOT?: InputMaybe<Array<ApplicationScalarWhereInput>>;
  OR?: InputMaybe<Array<ApplicationScalarWhereInput>>;
  candidateId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  jobId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export type ApplicationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ApplicationScalarWhereWithAggregatesInput>>;
  candidateId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  jobId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumStatusWithAggregatesFilter>;
};

export type ApplicationUpdateInput = {
  candidate?: InputMaybe<UserUpdateOneRequiredWithoutApplicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  job?: InputMaybe<JobUpdateOneRequiredWithoutApplicationsNestedInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
};

export type ApplicationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
};

export type ApplicationUpdateManyWithWhereWithoutCandidateInput = {
  data: ApplicationUpdateManyMutationInput;
  where: ApplicationScalarWhereInput;
};

export type ApplicationUpdateManyWithWhereWithoutJobInput = {
  data: ApplicationUpdateManyMutationInput;
  where: ApplicationScalarWhereInput;
};

export type ApplicationUpdateManyWithoutCandidateNestedInput = {
  connect?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationCreateOrConnectWithoutCandidateInput>>;
  create?: InputMaybe<Array<ApplicationCreateWithoutCandidateInput>>;
  createMany?: InputMaybe<ApplicationCreateManyCandidateInputEnvelope>;
  delete?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ApplicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  set?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  update?: InputMaybe<Array<ApplicationUpdateWithWhereUniqueWithoutCandidateInput>>;
  updateMany?: InputMaybe<Array<ApplicationUpdateManyWithWhereWithoutCandidateInput>>;
  upsert?: InputMaybe<Array<ApplicationUpsertWithWhereUniqueWithoutCandidateInput>>;
};

export type ApplicationUpdateManyWithoutJobNestedInput = {
  connect?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationCreateOrConnectWithoutJobInput>>;
  create?: InputMaybe<Array<ApplicationCreateWithoutJobInput>>;
  createMany?: InputMaybe<ApplicationCreateManyJobInputEnvelope>;
  delete?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ApplicationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  set?: InputMaybe<Array<ApplicationWhereUniqueInput>>;
  update?: InputMaybe<Array<ApplicationUpdateWithWhereUniqueWithoutJobInput>>;
  updateMany?: InputMaybe<Array<ApplicationUpdateManyWithWhereWithoutJobInput>>;
  upsert?: InputMaybe<Array<ApplicationUpsertWithWhereUniqueWithoutJobInput>>;
};

export type ApplicationUpdateWithWhereUniqueWithoutCandidateInput = {
  data: ApplicationUpdateWithoutCandidateInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
  data: ApplicationUpdateWithoutJobInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationUpdateWithoutCandidateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  job?: InputMaybe<JobUpdateOneRequiredWithoutApplicationsNestedInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
};

export type ApplicationUpdateWithoutJobInput = {
  candidate?: InputMaybe<UserUpdateOneRequiredWithoutApplicationsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
};

export type ApplicationUpsertWithWhereUniqueWithoutCandidateInput = {
  create: ApplicationCreateWithoutCandidateInput;
  update: ApplicationUpdateWithoutCandidateInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
  create: ApplicationCreateWithoutJobInput;
  update: ApplicationUpdateWithoutJobInput;
  where: ApplicationWhereUniqueInput;
};

export type ApplicationWhereInput = {
  AND?: InputMaybe<Array<ApplicationWhereInput>>;
  NOT?: InputMaybe<Array<ApplicationWhereInput>>;
  OR?: InputMaybe<Array<ApplicationWhereInput>>;
  candidate?: InputMaybe<UserRelationFilter>;
  candidateId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  job?: InputMaybe<JobRelationFilter>;
  jobId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export type ApplicationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Status>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Job = {
  __typename?: 'Job';
  _count?: Maybe<JobCount>;
  applications: Array<Application>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type JobApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};

export type JobCount = {
  __typename?: 'JobCount';
  applications: Scalars['Int'];
};

export type JobCountAggregate = {
  __typename?: 'JobCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type JobCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobCreateInput = {
  applications?: InputMaybe<ApplicationCreateNestedManyWithoutJobInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type JobCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type JobCreateNestedOneWithoutApplicationsInput = {
  connect?: InputMaybe<JobWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<JobCreateWithoutApplicationsInput>;
};

export type JobCreateOrConnectWithoutApplicationsInput = {
  create: JobCreateWithoutApplicationsInput;
  where: JobWhereUniqueInput;
};

export type JobCreateWithoutApplicationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type JobGroupBy = {
  __typename?: 'JobGroupBy';
  _count?: Maybe<JobCountAggregate>;
  _max?: Maybe<JobMaxAggregate>;
  _min?: Maybe<JobMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type JobMaxAggregate = {
  __typename?: 'JobMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobMinAggregate = {
  __typename?: 'JobMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobOrderByWithAggregationInput = {
  _count?: InputMaybe<JobCountOrderByAggregateInput>;
  _max?: InputMaybe<JobMaxOrderByAggregateInput>;
  _min?: InputMaybe<JobMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobOrderByWithRelationInput = {
  applications?: InputMaybe<ApplicationOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type JobRelationFilter = {
  is?: InputMaybe<JobWhereInput>;
  isNot?: InputMaybe<JobWhereInput>;
};

export enum JobScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type JobScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<JobScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<JobScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<JobScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type JobUpdateInput = {
  applications?: InputMaybe<ApplicationUpdateManyWithoutJobNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
  connect?: InputMaybe<JobWhereUniqueInput>;
  connectOrCreate?: InputMaybe<JobCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<JobCreateWithoutApplicationsInput>;
  update?: InputMaybe<JobUpdateWithoutApplicationsInput>;
  upsert?: InputMaybe<JobUpsertWithoutApplicationsInput>;
};

export type JobUpdateWithoutApplicationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type JobUpsertWithoutApplicationsInput = {
  create: JobCreateWithoutApplicationsInput;
  update: JobUpdateWithoutApplicationsInput;
};

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  applications?: InputMaybe<ApplicationListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type JobWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyApplication: AffectedRowsOutput;
  createManyJob: AffectedRowsOutput;
  createManyPost: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneApplication: Application;
  createOneJob: Job;
  createOnePost: Post;
  createOneUser: User;
  deleteManyApplication: AffectedRowsOutput;
  deleteManyJob: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneApplication?: Maybe<Application>;
  deleteOneJob?: Maybe<Job>;
  deleteOnePost?: Maybe<Post>;
  deleteOneUser?: Maybe<User>;
  updateManyApplication: AffectedRowsOutput;
  updateManyJob: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneApplication?: Maybe<Application>;
  updateOneJob?: Maybe<Job>;
  updateOnePost?: Maybe<Post>;
  updateOneUser?: Maybe<User>;
  upsertOneApplication: Application;
  upsertOneJob: Job;
  upsertOnePost: Post;
  upsertOneUser: User;
};


export type MutationCreateManyApplicationArgs = {
  data: Array<ApplicationCreateManyInput>;
};


export type MutationCreateManyJobArgs = {
  data: Array<JobCreateManyInput>;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneApplicationArgs = {
  data: ApplicationCreateInput;
};


export type MutationCreateOneJobArgs = {
  data: JobCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyApplicationArgs = {
  where?: InputMaybe<ApplicationWhereInput>;
};


export type MutationDeleteManyJobArgs = {
  where?: InputMaybe<JobWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type MutationDeleteOneJobArgs = {
  where: JobWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyApplicationArgs = {
  data: ApplicationUpdateManyMutationInput;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type MutationUpdateManyJobArgs = {
  data: JobUpdateManyMutationInput;
  where?: InputMaybe<JobWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneApplicationArgs = {
  data: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpdateOneJobArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneApplicationArgs = {
  create: ApplicationCreateInput;
  update: ApplicationUpdateInput;
  where: ApplicationWhereUniqueInput;
};


export type MutationUpsertOneJobArgs = {
  create: JobCreateInput;
  update: JobUpdateInput;
  where: JobWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  viewCount: Scalars['Int'];
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  viewCount?: Maybe<Scalars['Float']>;
};

export type PostAvgOrderByAggregateInput = {
  viewCount?: InputMaybe<SortOrder>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  viewCount: Scalars['Int'];
};

export type PostCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  author?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewCount?: InputMaybe<Scalars['Int']>;
};

export type PostCreateManyAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewCount?: InputMaybe<Scalars['Int']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
};

export type PostCreateManyInput = {
  authorId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewCount?: InputMaybe<Scalars['Int']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  viewCount?: InputMaybe<Scalars['Int']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  viewCount: Scalars['Int'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  ViewCount = 'viewCount'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  authorId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  viewCount?: InputMaybe<IntFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringNullableWithAggregatesFilter>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  published?: InputMaybe<BoolWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  viewCount?: InputMaybe<IntWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  viewCount?: Maybe<Scalars['Int']>;
};

export type PostSumOrderByAggregateInput = {
  viewCount?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  viewCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  viewCount?: InputMaybe<IntFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateApplication: AggregateApplication;
  aggregateJob: AggregateJob;
  aggregatePost: AggregatePost;
  aggregateUser: AggregateUser;
  application?: Maybe<Application>;
  applications: Array<Application>;
  findFirstApplication?: Maybe<Application>;
  findFirstApplicationOrThrow?: Maybe<Application>;
  findFirstJob?: Maybe<Job>;
  findFirstJobOrThrow?: Maybe<Job>;
  findFirstPost?: Maybe<Post>;
  findFirstPostOrThrow?: Maybe<Post>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getApplication?: Maybe<Application>;
  getJob?: Maybe<Job>;
  getPost?: Maybe<Post>;
  getUser?: Maybe<User>;
  groupByApplication: Array<ApplicationGroupBy>;
  groupByJob: Array<JobGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByUser: Array<UserGroupBy>;
  job?: Maybe<Job>;
  jobs: Array<Job>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryAggregateJobArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>;
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type QueryApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindFirstApplicationArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindFirstApplicationOrThrowArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryFindFirstJobArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryFindFirstJobOrThrowArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPostOrThrowArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetApplicationArgs = {
  where: ApplicationWhereUniqueInput;
};


export type QueryGetJobArgs = {
  where: JobWhereUniqueInput;
};


export type QueryGetPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByApplicationArgs = {
  by: Array<ApplicationScalarFieldEnum>;
  having?: InputMaybe<ApplicationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type QueryGroupByJobArgs = {
  by: Array<JobScalarFieldEnum>;
  having?: InputMaybe<JobScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<JobOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryJobArgs = {
  where: JobWhereUniqueInput;
};


export type QueryJobsArgs = {
  cursor?: InputMaybe<JobWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Applied = 'applied',
  Matching = 'matching',
  Rejected = 'rejected',
  Shortlisted = 'shortlisted'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  addresses: Array<Address>;
  applications: Array<Application>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
};


export type UserApplicationsArgs = {
  cursor?: InputMaybe<ApplicationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ApplicationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ApplicationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApplicationWhereInput>;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  applications: Scalars['Int'];
  posts: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  applications?: InputMaybe<ApplicationCreateNestedManyWithoutCandidateInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateManyInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateNestedOneWithoutApplicationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<UserCreateWithoutApplicationsInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutApplicationsInput = {
  create: UserCreateWithoutApplicationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutApplicationsInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  applications?: InputMaybe<ApplicationCreateNestedManyWithoutCandidateInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  addresses?: InputMaybe<AddressOrderByCompositeAggregateInput>;
  applications?: InputMaybe<ApplicationOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  applications?: InputMaybe<ApplicationUpdateManyWithoutCandidateNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
};

export type UserUpdateManyMutationInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutApplicationsInput>;
  create?: InputMaybe<UserCreateWithoutApplicationsInput>;
  update?: InputMaybe<UserUpdateWithoutApplicationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutApplicationsInput>;
};

export type UserUpdateOneWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutApplicationsInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
};

export type UserUpdateWithoutPostsInput = {
  addresses?: InputMaybe<Array<AddressCreateInput>>;
  applications?: InputMaybe<ApplicationUpdateManyWithoutCandidateNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutApplicationsInput = {
  create: UserCreateWithoutApplicationsInput;
  update: UserUpdateWithoutApplicationsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  addresses?: InputMaybe<Array<AddressObjectEqualityInput>>;
  applications?: InputMaybe<ApplicationListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};
