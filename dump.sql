--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: filmUser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."filmUser" (
    id integer NOT NULL,
    "filmId" integer NOT NULL,
    "userId" integer NOT NULL,
    nota text,
    status boolean NOT NULL
);


--
-- Name: filmUser_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."filmUser_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: filmUser_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."filmUser_id_seq" OWNED BY public."filmUser".id;


--
-- Name: films; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films (
    id integer NOT NULL,
    name text NOT NULL,
    genre character varying(100) NOT NULL,
    platform character varying(100) NOT NULL
);


--
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(300) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: filmUser id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."filmUser" ALTER COLUMN id SET DEFAULT nextval('public."filmUser_id_seq"'::regclass);


--
-- Name: films id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: filmUser; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."filmUser" VALUES (1, 1, 1, 'bom filme', true);
INSERT INTO public."filmUser" VALUES (2, 3, 1, 'bom filme', true);


--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.films VALUES (2, 'pixel', 'adventure', 'netflix');
INSERT INTO public.films VALUES (3, 'Batman', 'adventure', 'hbomax');
INSERT INTO public.films VALUES (4, 'Superman', 'adventure', 'hbomax');
INSERT INTO public.films VALUES (5, 'Entre Facas e Segredos', 'suspense', 'netflix');
INSERT INTO public.films VALUES (6, 'A fuga das galinhas', 'suspense', 'netflix');
INSERT INTO public.films VALUES (7, 'perry', 'adventure', 'netflix');
INSERT INTO public.films VALUES (8, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (9, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (10, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (11, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (12, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (13, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (14, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (15, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (16, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (17, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (18, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (19, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (20, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (21, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (22, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (23, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (24, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (25, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (26, 'filme', 'genero', 'netflix');
INSERT INTO public.films VALUES (27, 'pixel', 'adventure', 'netflix');
INSERT INTO public.films VALUES (28, 'pixel', 'adventure', 'netflix');
INSERT INTO public.films VALUES (29, 'pixel', 'adventure', 'netflix');
INSERT INTO public.films VALUES (30, 'pixe', 'adventure', 'netflix');
INSERT INTO public.films VALUES (31, 'pixe', 'adventure', 'netflix');
INSERT INTO public.films VALUES (32, 'pixe', 'adventure', 'netflix');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Anderson');
INSERT INTO public.users VALUES (2, 'Seu Lindo Nome');


--
-- Name: filmUser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."filmUser_id_seq"', 2, true);


--
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films_id_seq', 32, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: filmUser filmUser_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."filmUser"
    ADD CONSTRAINT "filmUser_pkey" PRIMARY KEY (id);


--
-- Name: films films_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

